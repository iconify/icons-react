import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am1rgeb0a.css';
import '../../css/g/gz7h90b8w.css';
import '../../css/u/ugho9_83h.css';
import '../../css/m/mqpwqt44o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am1rgeb0a"/><path class="gz7h90b8w"/><path class="ugho9_83h"/><circle class="mqpwqt44o"/>`,
		"fallback": "famicons:wifi",
	});
}

export default Component;
