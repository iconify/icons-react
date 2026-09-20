import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqplhccxe.css';
import '../../css/m/m597sacji.css';

const viewBox = {"width":518,"height":518};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqplhccxe"/><path class="m597sacji"/>`,
		"fallback": "thesvg-color:yarn",
	});
}

export default Component;
