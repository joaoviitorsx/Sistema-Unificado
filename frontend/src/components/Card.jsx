function Card({ children }) {
    return (
        <div className="p-6 m-4 shadow-lg rounded-lg bg-white w-full max-w-md h-auto shadow-gray-380">
            {children}
        </div>
    );
}

export default Card;