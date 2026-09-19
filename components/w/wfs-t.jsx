import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoaouj8_a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoaouj8_a"/>`,
		"fallback": "gis:wfs-t",
	});
}

export default Component;
