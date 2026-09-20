import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn2-zcb5a.css';
import '../../css/h/hx140-n7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fn2-zcb5a"/><path class="hx140-n7o"/>`,
		"fallback": "selfhst:yubal",
	});
}

export default Component;
