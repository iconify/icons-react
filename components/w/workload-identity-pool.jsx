import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnpbp5f4y.css';
import '../../css/g/gk7wsqrvw.css';
import '../../css/r/rzr3q0bfp.css';
import '../../css/h/hu6ejdbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="gnpbp5f4y"/><path class="gk7wsqrvw"/><path class="rzr3q0bfp"/><path class="hu6ejdbby"/>`,
		"fallback": "gcp:workload-identity-pool",
	});
}

export default Component;
