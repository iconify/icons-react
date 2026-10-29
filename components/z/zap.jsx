import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhm81xbjd.css';
import '../../css/h/hqfaq1dih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhm81xbjd"/><path class="hqfaq1dih"/>`,
		"fallback": "withicons-bauhaus:zap",
	});
}

export default Component;
