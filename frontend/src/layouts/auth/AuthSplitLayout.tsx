import type { AuthLayoutSplitProps } from '../../types/layouts/auth/authSplitLayout';

export default function AuthSplitLayout({ left, right }: AuthLayoutSplitProps) {
    return (
        <div className="flex flex-1 relative">
            {left && (
                <div className="hidden md:flex w-1/2 flex-col items-center justify-center text-white">
                    {left}
                </div>
            )}

            <div className="flex w-full md:w-1/2 items-center justify-center">
                {right}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-black">
                &copy; 2025 Realize Software.
            </div>
        </div>
    );
}