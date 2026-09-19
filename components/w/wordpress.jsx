import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilndq7y4j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ilndq7y4j"/>`,
		"fallback": "devicon-plain:wordpress",
	});
}

export default Component;
