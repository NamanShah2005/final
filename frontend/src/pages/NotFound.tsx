import './NotFound.scss';

const NotFound = () => {
	return (
		<>
			<div id={"page-404"}>
				The requested page either does not exist, or the frontend dev procrastinated on making it.
				<div id={"button-404"}>
          <a href={"/"}>Go to Home</a>
        </div>
			</div>
		</>
	);
};

export default NotFound;
