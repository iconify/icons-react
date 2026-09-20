import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whvnh9-te.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whvnh9-te"/>`,
		"fallback": "pinhead:west-virginia",
	});
}

export default Component;
