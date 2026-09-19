import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4uihebjq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4uihebjq"/>`,
		"fallback": "dinkie-icons:womans-hat",
	});
}

export default Component;
