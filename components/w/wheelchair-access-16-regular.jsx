import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gh01jiq8c {
  fill: currentColor;
  d: path("M12 1a1.997 1.997 0 0 1 .095 3.994l.007.027c.08.47-.05.95-.356 1.315L10.35 8.005h2.529a1.625 1.625 0 0 1 1.582 1.997l-.764 3.241a1.625 1.625 0 0 1-3.163-.745l.293-1.243H9.97A4.25 4.25 0 1 1 6.468 6.56l1-1.158l-.31-.18l-.497.409a1.625 1.625 0 0 1-2.065-2.509l1.369-1.128l.101-.076a1.63 1.63 0 0 1 1.748-.074l2.192 1.274Q10 3.06 10 3a2 2 0 0 1 2-2M5.75 7.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m3.875 1.505c.176.389.295.809.346 1.25h2.119l-.582 2.472a.625.625 0 0 0 1.216.287l.763-3.24a.626.626 0 0 0-.608-.77zM7.313 2.71a.63.63 0 0 0-.712.058L5.23 3.895a.626.626 0 0 0 .794.964l1.035-.851l1.954 1.136l-1.502 1.738a4.3 4.3 0 0 1 1.481 1.123h.053l1.933-2.31a.626.626 0 0 0-.16-.938l-.52-.31l-.006-.005zM12 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="gh01jiq8c"/>`,
		"fallback": "fluent:wheelchair-access-16-regular",
	});
}

export default Component;
