import React, { ReactElement, FormEvent, useState } from 'react';
interface Props {

}

export default function PostTextField(props: Props): ReactElement {
    const [post, setPost] = useState('');
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form className="post-form flex" onSubmit={e => handleSubmit(e)}>
            <input type="text" className="post-text-field" onChange={e => setPost(e.target.value)}/>
            <input type="submit" className="btn btn-post ml-4 mt-1" value="Post"/>
        </form>
    )
}
