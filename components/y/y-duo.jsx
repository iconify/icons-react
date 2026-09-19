import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf-g88cab.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf-g88cab"/>`,
		"fallback": "glyphs:y-duo",
	});
}

export default Component;
