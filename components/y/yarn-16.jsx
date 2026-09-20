import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/josx51y5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="josx51y5i"/>`,
		"fallback": "nonicons:yarn-16",
	});
}

export default Component;
