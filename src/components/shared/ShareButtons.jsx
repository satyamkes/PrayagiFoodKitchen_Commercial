import React from 'react';
import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react';
import { toast } from 'react-toastify';

const ShareButtons = ({ url, title, description }) => {
    const shareUrl = url || window.location.href;
    const shareTitle = title || document.title;
    const shareDescription = description || '';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        toast.success('Link copied to clipboard!');
    };

    const shareButtons = [
        {
            name: 'Facebook',
            icon: Facebook,
            color: 'text-blue-600 hover:bg-blue-50',
            onClick: () => {
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                    '_blank',
                    'width=600,height=400'
                );
            }
        },
        {
            name: 'Twitter',
            icon: Twitter,
            color: 'text-sky-500 hover:bg-sky-50',
            onClick: () => {
                window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
                    '_blank',
                    'width=600,height=400'
                );
            }
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            color: 'text-blue-700 hover:bg-blue-50',
            onClick: () => {
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                    '_blank',
                    'width=600,height=400'
                );
            }
        },
        {
            name: 'Email',
            icon: Mail,
            color: 'text-gray-600 hover:bg-gray-50',
            onClick: () => {
                window.location.href = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareDescription + ' ' + shareUrl)}`;
            }
        },
        {
            name: 'Copy Link',
            icon: Link2,
            color: 'text-primary-600 hover:bg-primary-50',
            onClick: copyToClipboard
        }
    ];

    return (
        <div className="flex items-center space-x-2">
            {shareButtons.map((button) => (
                <button
                    key={button.name}
                    onClick={button.onClick}
                    className={`p-2 rounded-lg border border-gray-200 transition-all ${button.color}`}
                    title={`Share on ${button.name}`}
                    aria-label={`Share on ${button.name}`}
                >
                    <button.icon className="h-5 w-5" />
                </button>
            ))}
        </div>
    );
};

export default ShareButtons;
