class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = function () {
            return _url;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video.";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        multimediaModule.play(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        document.getElementById(this.id).setAttribute('src', urlConTiempo);
    }
}
const multimediaModule = (function () {
    const setUrl = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    };


    return {
        play: (url, id) => {
            setUrl(url, id);
        }
    };
})();

const musica = new Reproductor('https://www.youtube.com/embed/jRuXTUwOfoQ', 'musica');
const peliculas = new Reproductor('https://www.youtube.com/embed/zV_pdLb476k', 'peliculas');
const series = new Reproductor('https://www.youtube.com/embed/C2-YwsEq0-0', 'series');

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();