const BoatVideo = () => {
    return <video className="h-100vh w-full object-cover animate-clip-path-from-top" autoPlay muted loop>
        <source src="/assets/boat.mp4" type="video/mp4"/>
    </video>
}

export default BoatVideo;