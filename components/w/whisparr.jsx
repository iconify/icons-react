import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j48h6jphd.css';
import '../../css/c/ce756l4cb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j48h6jphd"/><path class="ce756l4cb"/>`,
		"fallback": "selfhst:whisparr",
	});
}

export default Component;
