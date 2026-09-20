import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj8o_xb5j.css';
import '../../css/m/mqstf9bxa.css';
import '../../css/x/xlvhy0vyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj8o_xb5j"/><path class="mqstf9bxa"/><path class="xlvhy0vyx"/>`,
		"fallback": "uim:web-grid",
	});
}

export default Component;
