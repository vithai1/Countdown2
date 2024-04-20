import { useState } from "react";

export const GenreSelection = ({ data }) => {
	const [showFiction, setShowFiction] = useState(true);
	const [showNonFiction, setShowNonFiction] = useState(true);
	const [showChildren, setShowChildren] = useState(true);

	const fictionBooks = data.fiction;
	const nonFictionBooks = data["non-fiction"];
	const childrenBooks = data.children;

	return (
		<div className="wrapper">
			<h1>Bookstore</h1>
			<div>
				{showFiction ? (
					<button onClick={() => setShowFiction(!showFiction)}>Hide Fiction</button>
				) : (
					<button onClick={() => setShowFiction(!showFiction)}>Show Fiction</button>
				)}
				{showNonFiction ? (
					<button onClick={() => setShowNonFiction(!showNonFiction)}>Hide Non-Fiction</button>
				) : (
					<button onClick={() => setShowNonFiction(!showNonFiction)}>Show Non-Fiction</button>
				)}
				{showChildren ? (
					<button onClick={() => setShowChildren(!showChildren)}>Hide Children</button>
				) : (
					<button onClick={() => setShowChildren(!showChildren)}>Show Children</button>
				)}
			</div>
			{showFiction ? (
				<>
    				<h2>Fiction: </h2>
					{fictionBooks.map((element, index) => (
						<div key={index}>
							<p>
								<i>{element.title}</i>, {element.author}, ${element.price}
							</p>
						</div>
					))}
				</>
			) : null}
			{showNonFiction ? (
				<>
					<h2>Non-Fiction: </h2>
					{nonFictionBooks.map((element, index) => (
						<div key={index}>
							<p>
								<i>{element.title}</i>, {element.author}, ${element.price}
							</p>
						</div>
					))}
				</>
			) : null}
			{showChildren ? (
				<>
					<h2>Children: </h2>
					{childrenBooks.map((element, index) => (
						<div key={index}>
							<p>
								<i>{element.title}</i>, {element.author}, ${element.price}
							</p>
						</div>
					))}
				</>
			) : null}
		</div>
	);
};