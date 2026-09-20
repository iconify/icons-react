import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2r4mmblp.css';

const viewBox = {"width":134,"height":135};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k2r4mmblp"/>`,
		"fallback": "thesvg-color:xata",
	});
}

export default Component;
