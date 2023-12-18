const BoatVideo = () => {
    return <video className="h-100vh w-full object-cover animate-clip-path-from-top" autoPlay muted loop playsInline webkit-playsinline={true}>
        <source src="/assets/boat_opt.mp4" type="video/mp4"/>
        <source src="/assets/boat.webm" type="video/webm"/>
    </video>
}

export default BoatVideo;