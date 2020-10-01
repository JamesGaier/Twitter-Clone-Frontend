import React, { ReactElement } from 'react';

import TwitterIcon from '../components/global/TwitterIcon';
import PostTextField from '../components/PostPage/PostTextField';
import Posts from '../components/PostPage/Posts';
interface Props {

}

export default function PostPage(props: Props): ReactElement {
    return (
        <div className="post-page">
            <div className="posts container flex justify-content-center">
                <div className="mt-6 flex flex-col align-items-center">
                    <TwitterIcon size="icon-jumbo"/>
                    <h1 className="fake-twitter-title">Fake Twitter</h1>
                    <div className="mt-3 ml-6">
                        <PostTextField />
                    </div>
                    <div className="mt-3">
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    );
}
