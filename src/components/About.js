import React from 'react';
import joke from '../assets/joke.jpg';

function About() {
	return (
		<details>
			<summary>About this app</summary>
			<img
				src={joke}
				alt={`Sometimes I write "Drink Coffee" on my to-do list, just so I feel like I accomplished something.`}
				style={{
					width: '100%',
					margin: '20px 0'
				}}
			/>
			<p style={{margin: 0, color: '#595959', lineHeight: 1.5}}>
				We tend to add a lot of unnecessary tasks on our todo list and check off such
				small tasks which gives us a false sense of accomplishement
				even when our top priority tasks are still there on the list
				untouched! This app only let's you have 4 incomplete tasks on
				the list at a time, once you check off those tasks you can add
				more. You can also re-arrange incomplete tasks according to your
				priority. 
                <br/><b>The goal of this app is to let you mindfully choose
				what tasks to focus on that are actually important!</b>

                <br/> <br/>  <i>Note: Your tasks are locally stored on your browser.</i>
			</p>
		</details>
	);
}

export default About;
