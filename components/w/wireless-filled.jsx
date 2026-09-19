import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbwx0nb3m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbwx0nb3m"/>`,
		"fallback": "dinkie-icons:wireless-filled",
	});
}

export default Component;
