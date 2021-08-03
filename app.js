const reviews = [
	{
		image: "",
		name: "Susan Smith",
		job: "Web Developer",
		review: "I'm baby meggings twee health goth +1. "
			+ "Bicycle rights tumeric chartreuse before "
			+ "they sold out chambray pop-up. Shaman "
			+ "humblebrag pickled coloring book salvia "
			+ "hoodie, cold-pressed four dollar toast "
			+ "everyday carry"
	},
	{
		image: "",
		name: "Joshua Felix",
		job: "QA Tester",
		review: "But the cycle of life is everlasting. "
			+ "Life is born, consumes, dies, and is consumed."
			+ "Nature takes its toll on all that borrow its "
			+ "power. We seek to escape this cycle by chasing "
			+ "a concept we call \"immortality,\" but our "
			+ "futile attempts are in vain."
	},
	{
		image: "",
		name: "Walter Gray",
		job: "Illustrator",
		review: "Haha, you want a review? Oh I'll give "
			+ "you a review, all right. Okay. Now, look "
			+ "at me. Next, close your eyes. Finally, "
			+ "open your eyes again and look at me. "
			+ "Congratulations! You have successfully "
			+ "re-viewed me. Boom."
	},
	{
		image: "",
		name: "Heather Farbough",
		job: "Software Engineer",
		review: "I'm too old for this. Find someone else "
			+ "to write your stinkin' review."
	},
	{
		image: "",
		name: "Benedict Eggspurt",
		job: "Comedian",
		review: "Why did the chicken cross the road? "
			+ "To get to the other side! And by \"other "
			+ "side,\" I mean this chicken sought death."
	},
	{
		image: "",
		name: "Collin Doberman",
		job: "Software Developer",
		review: "Hi, my name is Collin Doberman, and "
			+ "welcome to my YouTube channel. On here, "
			+ "you'll find a bunch of content outlining "
			+ "the best ways to learn programming. Be "
			+ "sure to Like, Comment, and Subscribe so "
			+ "you don't miss my content."
	}
]
const image = document.querySelector("img")
const author = document.getElementById("name")
const job = document.getElementById("job")
const review = document.getElementById("review")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const random = document.getElementById("random")
let current = 0

function displayReview() {
	image.src = reviews[current].image
	author.innerText = reviews[current].name
	job.innerText = reviews[current].job
	review.innerText = reviews[current].review
}

next.addEventListener("click", () => {
	current++
	if(current >= reviews.length){
		current = 0
	}
	displayReview()
})

prev.addEventListener("click", () => {
	current--
	if(current < 0){
		current = reviews.length - 1
	}
	displayReview()
})
