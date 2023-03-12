import React, { useState } from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { RiShareForwardLine } from "react-icons/ri";
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";
const Share = () => {

    const shareUrl = `${window.location.href}`;
    const [shareWith, setShareWith] = useState(false);
    return (
        <div className="">
            <div
                tabIndex="-3"
            >
                {shareWith ? (
                    <div
                        className=""

                    >
                        <div className="flex gap-5 absolute top-0 left-0">


                            <FacebookShareButton
                                url={shareUrl}
                                quote={"nijer mato title dibo"}
                                hashtag={"#portfolio..."}
                            >
                                <FacebookIcon size={40} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={shareUrl}
                                quote={"nijer mato title dibo"}
                                hashtag={"#portfolio..."}
                            >
                                <TwitterIcon size={40} round={true} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={shareUrl}
                                quote={"nijer mato title dibo"}
                                hashtag={"#portfolio..."}
                            >
                                <LinkedinIcon size={40} round={true} />
                            </LinkedinShareButton>
                            <WhatsappShareButton
                                url={shareUrl}
                                quote={"nijer mato title dibo"}
                                hashtag={"#portfolio..."}
                            >
                                <WhatsappIcon size={40} round={true} />
                            </WhatsappShareButton>
                        </div>
                        <div onClick={() => setShareWith(!shareWith)} className="bg-white p-2 border-4 border-gray-400 rounded-full mb-2 w-10"
                        >

                            <FaTimes className='text-black cursor-pointer bg-white' />
                        </div>
                    </div>
                ) : (
                    <div className="cursor-pointer text-white" >
                        {/* Share <RiShareForwardLine className='text-white' /> */}
                        <div onClick={() => setShareWith(!shareWith)} className='bg-white p-2 border-4 border-gray-400 rounded-full mb-2 w-10
                                                    '>
                            <BiShareAlt className='text-black cursor-pointer bg-white' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Share;