import React from "react";
import PropTypes from "prop-types";

function ContentRowMovies(props){
    return(
		/* <!-- Movies in Data Base --> */
		<div className="row">
			{props.titulos.map((titulo, i) => (
		<div className="col-md-4 mb-4" key={"key2"+i} >
			<div  className={`card border-left-${props.colores[i]} shadow h-100 py-2 `}>
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
								{titulo}
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifras[i]}</div>
						</div>
						<div className="col-auto">
							<i className="fas fa-film fa-2x text-gray-300"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		))}
	</div>
    )
}

export default ContentRowMovies;