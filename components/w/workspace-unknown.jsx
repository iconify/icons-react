import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhk-zbc0u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhk-zbc0u"/>`,
		"fallback": "codicon:workspace-unknown",
	});
}

export default Component;
