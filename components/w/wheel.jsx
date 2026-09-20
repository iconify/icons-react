import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/o/ons53cb4g.css';
import '../../css/p/phz5e8cbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="shu3xdl9q"/><circle class="ons53cb4g"/><path class="phz5e8cbv"/></g>`,
		"fallback": "lucide-lab:wheel",
	});
}

export default Component;
