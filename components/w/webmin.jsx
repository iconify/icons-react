import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w701jtbjt.css';
import '../../css/j/j8w5bp6yw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w701jtbjt"/><path class="j8w5bp6yw"/>`,
		"fallback": "selfhst:webmin",
	});
}

export default Component;
