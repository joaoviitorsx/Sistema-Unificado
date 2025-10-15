import type { AuthLayoutBgProps } from '../../types/layouts/auth/authBgLayout';

export default function AuthBgLayout({children, bgImg = './src/assets/bg.png'}: AuthLayoutBgProps){
    return(
        <div className='min-h-screen w-full flex bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImg})`}}>
            {children}
        </div>
    );
}