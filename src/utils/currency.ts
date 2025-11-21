import i18n from 'i18next';

export function parseCurrency(value: string): number {
    if (!value) return 0;

    const lang = i18n.language;

    if (lang === "pt") {
        // PT-BR → "1.234,56" → 1234.56
        return Number(
            value
                .replace(/\./g, "") // remove pontos
                .replace(",", ".")  // troca vírgula por ponto
        );
    }

    // EN-US → "1,234.56" → 1234.56
    return Number(
        value.replace(/,/g, "")  // remove vírgulas
    );
}

export function formatCurrency(value: number): string {
    const lang = i18n.language;

    return new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", {
        style: "currency",
        currency: lang === "pt" ? "BRL" : "USD"
    }).format(value);
}
