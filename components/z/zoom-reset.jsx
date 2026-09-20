import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/apd8szp8a.css';
import '../../css/l/lzy79j5js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="apd8szp8a"/><path class="lzy79j5js"/></g>`,
		"fallback": "tabler:zoom-reset",
	});
}

export default Component;
