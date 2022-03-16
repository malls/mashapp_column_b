window.onload = function() {

    let currentAudioRegion;

    const audioStart = document.querySelector('#audio-start-range-value');
    const audioEnd = document.querySelector('#audio-start-range-value');

    const playButton = document.querySelector('#play');
    const pauseButton = document.querySelector('#pause');

    //drop window after testing
    const wavesurfer = window.wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        plugins: [
            WaveSurfer.regions.create({
                loop: true
            }),
            WaveSurfer.timeline.create({
                container: "#wave-timeline",
            })
        ]
    });

    wavesurfer.load('/audio/Drip Dry Eyes.mp3');
    wavesurfer.enableDragSelection({

    })
    wavesurfer.on('ready', () => {
        wavesurfer.on('interaction', (e) => {
            console.log('wavesurfer clicked', e)
        });
    });


    audioStart.addEventListener('change', (e) => {
        console.log('start value changed', e.target.value)
        wavesurfer.seekTo(+e.target.value)
    });

    audioEnd.addEventListener('change', (e) => {
        console.log('end value changed', e);
        wavesurfer.setPlayEnd(+e.target.value);
    });


    playButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (listRegions() && listRegions()[0]) {
            listRegions()[0].playLoop()
        } else {
            wavesurfer.play();
        }
    });
    pauseButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(listRegions());
        wavesurfer.pause();
    });


    function function_name(argument) {

    }

    function listRegions() {
        const keys = Object.keys(wavesurfer.regions.list);
        return keys.map(k => wavesurfer.regions.list[k]);
    }


    function getAudioStart() {}
    function setAudioStart() {}
    function getAudioEnd() {}
    function setAudioEnd() {}

};
