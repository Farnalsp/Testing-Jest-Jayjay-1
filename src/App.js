import React from 'react';

export const App = () => {
    return (
        <div>
            <h1>Hello Jayjay Student!</h1>
            <h2>Let's create unit test</h2>
        </div>
    );
};

export const fungsi1 = (a, b) => a + b;
export const fungsi2 = (a) => a * 2;
export const fungsi3 = (a) => {
    if (a < 0) throw new Error('Input tidak boleh negatif');
    return a;
};
