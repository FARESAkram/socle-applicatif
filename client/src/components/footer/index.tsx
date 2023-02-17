const Footer = () => {
    const developers = [
        {
            firstName: 'Akram',
            lastName: 'FARES',
        }
    ]
    return (
        <footer className="flex mt-4 justify-center p-4 text-center bg-white rounded-lg shadow md:flex md:items-center md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {`© ${new Date().getFullYear()} , ${developers.map((developer) => `${developer.firstName} ${developer.lastName}`).join(' & ')}`} 
            </span>
        </footer>
    )
}

export default Footer