import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqynkgb3j.css';
import '../../css/h/h2dipzbbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqynkgb3j"/><path class="h2dipzbbx"/>`,
		"fallback": "octicon:zoom-out-16",
	});
}

export default Component;
