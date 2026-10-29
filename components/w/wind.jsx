import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edoifnexa.css';
import '../../css/a/axvvxkbhp.css';
import '../../css/i/i5uzet8dn.css';
import '../../css/m/mwph9vbmk.css';
import '../../css/f/fv94c3kzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edoifnexa wm-shadow"/><path class="axvvxkbhp wm-k"/><path class="i5uzet8dn wm-k"/><path class="mwph9vbmk wm-a"/><path class="fv94c3kzw wm-a"/>`,
		"fallback": "withicons-pastel:wind",
	});
}

export default Component;
