import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw63te55b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw63te55b"/>`,
		"fallback": "selfhst:woodpecker-ci-dark",
	});
}

export default Component;
