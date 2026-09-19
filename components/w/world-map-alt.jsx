import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zte0-4eja.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zte0-4eja"/>`,
		"fallback": "gis:world-map-alt",
	});
}

export default Component;
