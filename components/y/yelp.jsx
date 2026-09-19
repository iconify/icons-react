import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc9g4or4z.css';

const viewBox = {"width":352,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc9g4or4z"/>`,
		"fallback": "ps:yelp",
	});
}

export default Component;
