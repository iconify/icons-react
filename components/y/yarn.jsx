import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3o8babri.css';
import '../../css/t/tn__odbjy.css';
import '../../css/f/faudyac8g.css';
import '../../css/n/n3a1avn0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b3o8babri"/><path class="tn__odbjy"/><path class="faudyac8g"/><path class="n3a1avn0l"/></g>`,
		"fallback": "tabler:yarn",
	});
}

export default Component;
