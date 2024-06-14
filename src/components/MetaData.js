import React from 'react';
import Author from './Author';
import Date from './Date'

const MetaData = () => {

    return (
        <div class="flex items-center ">
            <div class="pr-1 text-sm">
                <Author />
            </div>
            <div class="border-l pl-1 border-gray-300">
                <Date />
            </div>
        </div>
    )
};

export default MetaData;