import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/at4jamb2a.css';
import '../../css/t/tlmjgjbij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="at4jamb2a"/><path class="tlmjgjbij"/></g>`,
		"fallback": "lucide:wrap-text",
	});
}

export default Component;
