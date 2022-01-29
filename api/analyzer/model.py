from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def predict(txt):
    analyzer = SentimentIntensityAnalyzer()

    scores = analyzer.polarity_scores(txt)

    return scores