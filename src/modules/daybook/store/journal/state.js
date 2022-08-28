/* Reactivo y notifica a todos los componentes
que esten escuchando los cambios de nuestro state */

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Cillum amet enim elit qui irure anim non commodo. Deserunt eu aliquip officia id. Voluptate ad est eiusmod quis fugiat ut deserunt nulla voluptate cillum aliqua pariatur. Et ea culpa nisi nulla pariatur consectetur ad.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Voluptate Lorem pariatur in excepteur. Sint voluptate sint qui commodo est velit duis do ut ad ullamco. Enim anim tempor labore adipisicing eiusmod ut adipisicing proident. Magna qui esse nostrud proident. Nulla est et est ad est commodo mollit consectetur voluptate irure laboris sint qui.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Ipsum mollit sunt tempor pariatur consequat labore excepteur exercitation minim voluptate in consequat exercitation ad. Aute incididunt consequat commodo proident Lorem consequat et fugiat voluptate occaecat consectetur sint dolor. Veniam laboris et quis cillum excepteur non ullamco cupidatat nulla consectetur dolore est sit. Enim irure incididunt cupidatat deserunt quis laboris ipsum nulla fugiat aliquip minim cillum aliquip. In dolor eiusmod eiusmod ea in officia deserunt non.',
            picture: null,
        },
    ]
})