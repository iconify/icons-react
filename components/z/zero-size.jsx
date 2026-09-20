import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul95bdbte.css';
import '../../css/t/thyn37bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ul95bdbte"/><path class="thyn37bbx"/>`,
		"fallback": "lineicons:zero-size",
	});
}

export default Component;
