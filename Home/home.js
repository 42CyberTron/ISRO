const missons = document.querySelectorAll('.mission__container')

const missionObserver = new IntersectionObserver(
	(entries) => {
		const ON_SCREEN = 'on__screen'
		entries.forEach((entry) => {
			const { isIntersecting, target } = entry

			if (isIntersecting) {
				target.classList.add(ON_SCREEN)
				return true
			}

			target.classList.remove(ON_SCREEN)
		})
}, {
    threshold: 0.5,
})

missons.forEach((misson) => {
	missionObserver.observe(misson)
})