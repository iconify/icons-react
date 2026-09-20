import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/m/mwqyepbww.css';
import '../../css/i/ia0_hgbwx.css';
import '../../css/p/py15g5w5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><circle class="mwqyepbww"/><path class="ia0_hgbwx"/><circle class="py15g5w5q"/></g>`,
		"fallback": "lucide-lab:yin-yang",
	});
}

export default Component;
