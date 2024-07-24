import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { PostService } from '../_services/Post.service';

export const ListPost = () => {

    const [dataPost, setDataPost] = useState([]);

    const getAllPost = async () => {
        try {
            PostService.getAllPosts()
            .then((res) => {
                setDataPost(res.data)
            })
        } catch (error) {
            Swal.fire({ icon: 'error', title: 'Erreur!', text: `Échec de recuperation ${error}` });
            console.error(error);
        }
    };

    useEffect(() => {
        getAllPost();
    }, []);

    return (
        <div className='all-client'>
            {Array.isArray(dataPost) && dataPost.length > 0 ? (
                <div>
                    <h2>Posts</h2>
                    <ul>
                        {dataPost.map(post => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <img src={`http://localhost:8000/${post.image}`} alt={post.title} width="100" />
                                <button><FaTrash /></button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>Aucun Post disponible.</div>
            )}
        </div>
    );
};

export const AddEditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', content: '', preview: '' });
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const loadProfile = (e) => {
        const photo = e.target.files[0];
        if (photo) {
            setImage(photo);
            setPost({ ...post, preview: URL.createObjectURL(photo) });
            console.log(photo);
        }
    };

    const addPost = async () => {
        try {
            var data = {
                title: post.title,
                content: post.content,
                image: image,
            };
            PostService.createPost(data)
            .then(res => {
                if(res.status === 201){
                    Swal.fire({ icon: 'success', title: 'Message succès', text: 'Patient ajouté avec succès.', });
                    navigate("/");
                } else {
                    Swal.fire({ icon: 'error', title: 'Erreur!', text: 'Une erreur s\'est produite lors de l\'ajout du patient.', });
                }
            })
        } catch (error) {
            Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.' });
        }
    };

    const actionButton = async (e) => {
        e.preventDefault();

        if (!post.title || !post.content) {
            Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez compléter les champs!' });
        } else {
            if (!image) {
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez insérer une image!' });
            } else {
                Swal.fire({
                    title: `Voulez-vous vraiment ${id ? "modifier" : "ajouter"} ce nouveau post?`,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `${id ? "Modifier" : "Ajouter"}`,
                    denyButtonText: "Annuler",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        addPost();
                    }
                });
            }
        }
    };

    return (
        <div className=''>
            <Link to={`/`}>Home</Link>
            <form onSubmit={actionButton}>
                <div className='formulaire'>
                    <div className="field">
                        <label className='label'>Title</label>
                        <div className="control">
                            <input type='text' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} className='input' placeholder='Post title' required/>
                        </div>
                    </div>

                    <div className="field">
                        <label className='label'>Content</label>
                        <div className="control">
                            <input type='text' value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} className='input' placeholder='Content' required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Image</label>
                        <div className="control">
                            <div className="file">
                                <label className='file-label'>
                                    <input type='file' className='file-input' onChange={loadProfile} required/>
                                </label>
                            </div>
                        </div>
                    </div>

                    {post.preview ? (
                        <figure className='image is-128x128'>
                            <img src={post.preview} alt='Preview images' />
                        </figure>
                    ) : (
                        ""
                    )}
                    <div className="field btn">
                        <div className="control">
                            <input type='submit' value={id ? "Modifier" : "Ajouter"} className='button is-success' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
